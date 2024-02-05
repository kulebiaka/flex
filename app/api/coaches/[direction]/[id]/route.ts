import { stretchers } from "../../route";
import { fitnessCoaches } from "../../route";

const coaches: any = { stretching: stretchers, fitness: fitnessCoaches };

export async function GET(
  request: Request,
  { params: { direction, id } }: any,
) {
  return Response.json(coaches[direction][id]);
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
