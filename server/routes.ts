import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // In a production environment, you would send an email or store the data
      // For now, we'll just simulate a successful response
      
      console.log("Contact form submission:", { name, email, subject, message });
      
      // Simulate a brief delay for network effect
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Error sending message" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      const resumePath = path.resolve(process.cwd(), "attached_assets/Kristi Baishya Resume.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.download(resumePath, "Kristi_Baishya_Resume.pdf");
      } else {
        res.status(404).json({ message: "Resume file not found" });
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ message: "Error downloading resume" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
