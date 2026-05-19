/**
 * Lead Capture API Route
 * Saves customer inquiries to a local JSON file for CRM integration
 */

import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

export const maxDuration = 30

interface LeadData {
  timestamp: string
  fullName: string
  email: string
  phone: string
  company: string
  product: string
  quantity: string
  message: string
  lang: string
}

async function ensureLeadsDirectory() {
  const dir = join(process.cwd(), "public", "data")
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true })
  }
  return dir
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as LeadData

    // Validate required fields
    const requiredFields = ["fullName", "email", "phone", "company", "product", "quantity"]
    for (const field of requiredFields) {
      if (!body[field as keyof LeadData]) {
        return Response.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create lead object
    const lead: LeadData & { id: string } = {
      ...body,
      timestamp: new Date().toISOString(),
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }

    // Ensure directory exists
    const dir = await ensureLeadsDirectory()
    const filepath = join(dir, "leads.jsonl")

    // Append to JSONL file (one JSON object per line)
    const leadLine = JSON.stringify(lead) + "\n"
    await writeFile(filepath, leadLine, { flag: "a" })

    // Also send a simple notification email (if you have one configured)
    // For now, just log and return success
    console.log("[Lead Captured]", {
      email: lead.email,
      company: lead.company,
      product: lead.product,
      quantity: lead.quantity,
    })

    return Response.json(
      {
        success: true,
        message: "Lead captured successfully",
        leadId: lead.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Lead API Error]", error)
    return Response.json(
      { error: "Failed to process lead submission" },
      { status: 500 }
    )
  }
}
