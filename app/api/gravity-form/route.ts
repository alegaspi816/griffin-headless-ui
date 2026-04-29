export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formId = body.formId === 2 ? 2 : 1;

    const credentials = Buffer.from(
      `${process.env.GF_CONSUMER_KEY}:${process.env.GF_CONSUMER_SECRET}`
    ).toString("base64");

    const res = await fetch(
      `https://griffinheadlesscms.kinsta.cloud/wp-json/gf/v2/forms/${formId}/submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify({
          input_1: body.firstName,
          input_2: body.lastName,
          input_3: body.phone,
          input_4: body.email,
          input_5: body.message,
        }),
      }
    );

    const responseText = await res.text();

    console.log("GF RAW RESPONSE:", responseText);

    try {
      const data = JSON.parse(responseText);
      return Response.json(data);
    } catch {
      console.error("WordPress returned non-JSON response:", responseText);
      return Response.json(
        { error: "Invalid JSON from WordPress", raw: responseText },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
