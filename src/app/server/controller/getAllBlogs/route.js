import { dbConnect } from "../../db";
import Blog from "../../blogModel";

export async function GET() {
    try {
        await dbConnect(); // Connect to the MongoDB database
        const blog = await Blog.find({})
        return Response.json({blog})
    } catch (error) {
        console.log("TANGA", error)
    }
    
  }