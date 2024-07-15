import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAIService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

export default function ChatPage() {
    const [question, setQuestion] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [error, setError] = useState<string>("");

    async function send() {
        try {
            const data = await ChatAIService.ragChat(question)
            setResponse(data!)
            setQuestion("")
        } catch (err) {
            console.log({error: err})
            setError("error" + err?.toString())
        }
    }

    return <div className="p-m">
        <h3>Chatbot</h3>
        <div className="d-flex gap-2 flex-wrap">
            <TextField style={{
                width: '80%'
            }} value={question} onChange={(e) => setQuestion(e?.target?.value)}/>
            <Button theme="primary" onClick={send}>Submit</Button>
        </div>
        {error && <p>{error}</p>}
        {response &&
            <div>
                <Markdown>
                {response}
                </Markdown>
            </div>

        }
    </div>
}