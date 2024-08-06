import { NextResponse } from 'next/server';
import { prisma } from '../../../src/shared/config/prisma';

export async function GET() {
	try {
		const cars = await prisma.car.findMany({
			include: {
				spec: true,
			},
		});
		return NextResponse.json({
			cars,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
	}
}
