import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function BugRow({ bug }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseText, setResponseText] = useState("");
  const apiKey = "AIzaSyDHmTx0j__Pp8UIMp1p-atnwI630E4sKPs";

  const handleBugClick = async (event) => {
    event.preventDefault();

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const prompt = `I'm providing you the error. Please explain the problem in simple terms so that I can understand easily. The error is: ${bug.headline}`;
      const result = await chatSession.sendMessage(prompt);

      // Extract text and replace asterisks with HTML bold tags
      const explanation = result.response
        .text()
        .replace(/\*(.*?)\*/g, "<strong>$1</strong>");
      console.log("Full response:", explanation);

      // Set the formatted text in state
      setResponseText(explanation);
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error("Error:", error);
      setResponseText("An error occurred while fetching data from Gemini.");
      setIsModalOpen(true); // Show the error in the modal
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setResponseText("");
  };

  return (
    <>
      {/* Table Row */}
      <tr>
        <td>
          <a href="#" onClick={handleBugClick}>
            {bug.id}
          </a>
        </td>
        <td>{bug.component}</td>
        <td>{bug.age}</td>
        <td>{bug.pm}</td>
        <td>{bug.severity}</td>
        <td>{bug.headline}</td>
        <td>{bug.status}</td>
        <td>
          <a href="#">Add Note</a>
        </td>
      </tr>

      {/* Modal - Placed outside of <tbody> */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Bug Explanation</h2>
            {/* Render the formatted text using dangerouslySetInnerHTML */}
            <p dangerouslySetInnerHTML={{ __html: responseText }} />
          </div>
        </div>
      )}
    </>
  );
}

export default BugRow;
