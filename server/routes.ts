import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact message received successfully", 
        data: savedMessage 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Server error while processing your message" 
        });
      }
    }
  });

  // Get contact messages - typically this would be protected but keeping it simple
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({ 
        success: true, 
        data: messages 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Server error while retrieving messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
