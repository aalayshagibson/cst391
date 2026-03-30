import { Request, Response } from "express";
import * as service from "../services/hopeService";

export async function create(req: Request, res: Response) {
  try {
    const { title, scripture, message, dateCreated, isFavorite } = req.body;

    if (!title || !scripture || !message || !dateCreated) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const created = await service.createHope({
      title,
      scripture,
      message,
      dateCreated,
      isFavorite: Boolean(isFavorite)
    });

    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const rows = await service.getAllHope();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}

export async function getOne(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const entry = await service.getHopeById(id);

    if (!entry) return res.status(404).json({ error: "Not found" });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const affected = await service.updateHope(id, req.body);

    if (affected === 0) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const affected = await service.deleteHope(id);

    if (affected === 0) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}