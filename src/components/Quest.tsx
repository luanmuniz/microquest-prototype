import { Card, CardHeader, CardTitle, CardAction, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Header({ title, description, isToday, hideActions, reflection }: { title: string, description: string, isToday?: boolean, hideActions?: boolean, reflection?: string }) {
    return (
        <Card className="mb-4">
            <CardHeader className="text-left">
                <CardTitle>{title} {isToday && <Badge>Today</Badge>}</CardTitle>
                <CardDescription>{description}</CardDescription>
                {!hideActions && <CardAction className="mt-2">
                    {isToday ? '' : <Button variant="default" className="cursor-pointer">Set as Today's Quest</Button>}
                    <Button variant="default" className="cursor-pointer">Edit</Button>
                    <Button variant="default" className="cursor-pointer">Delete</Button>
                </CardAction>}
                {reflection && <CardContent className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Reflection</h3>
                    <p>{reflection}</p>
                </CardContent>}
            </CardHeader>
        </Card>
    );
}