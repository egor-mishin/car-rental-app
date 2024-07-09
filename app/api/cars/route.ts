import { NextResponse } from 'next/server';
import { cars } from '../../../_data/db';

export async function GET() {
	return NextResponse.json({
		cars,
	});
}

// export async function POST(req: Request) {
// 	const data = await req.json();
// 	return NextResponse.json({
// 		data,
// 	});
// }
