import { getById } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

interface Params {
params: { id: string}
}
export const GET = async (req: NextRequest, route: Params ) => {
try {
const id: string = route.params.id;
const post = getById(id)
if (!post) {
return NextResponse.json({ message: "ERROR", post }, { status: 404 })//bad

}
return NextResponse.json({ message: "OK", post }, { status: 200 })//success

} catch (err) {
return NextResponse.json({ message: "OK", err }, { status: 500 })//internal

}
}