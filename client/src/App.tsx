import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:4000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("❌ Fetch failed: " + err.message));
  }, []);

  return (
    <Layout>
      <div className="flex justify-center">
        <Card className="max-w-md w-full shadow-lg">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Welcome 👋</h2>
            <p className="text-gray-600">{message}</p>
            <Button className="w-full">➕ Add a New Habit</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
