import { NextResponse } from 'next/server';
import { prisma } from './../../../src/shared/lib/prisma';

export async function GET() {
	try {
		const banners = await prisma.banners.findMany({});
		return NextResponse.json({
			banners,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
	}
}
