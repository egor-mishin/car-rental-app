export async function POST(request: Request, response: Response) {
	const body = await request.json();
	const { email, password } = body;
	// Validate email and password here
	// Hash the password
	// Create  user in db
	// send a request

	return response.json();
}
