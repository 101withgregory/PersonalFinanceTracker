import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();


router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId });

    if (records.length === 0) {
      return res.status(404).send("No records found for the user.");
    }

    return res.status(200).send(records);
  } catch (err) {
    
    console.error("Error fetching financial records:", err);
    return res.status(500).send("Server error, please try again later.");
  }
});
router.post("/getAllByUserID/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId });

    if (records.length === 0) {
      return res.status(404).send("No records found for the user.");
    }

    return res.status(200).send(records);
  } catch (err) {
    
    console.error("Error fetching financial records:", err);
    return res.status(500).send("Server error, please try again later.");
  }
});

export default router;
