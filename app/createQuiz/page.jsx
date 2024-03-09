"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import CreateQuiz from "@components/CreateQuiz";

const CreatePrompt = () => {

  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState(
    {
        title: "", 
        q1: "",
        o11: "",
        o12: "",
        o13: "",
        o14: "",
        ans1: "",
        q2: "",
        o21: "",
        o22: "",
        o23: "",
        o24: "",
        ans2: "",
        q3: "",
        o31: "",
        o32: "",
        o33: "",
        o34: "",
        ans3: "",
        q4: "",
        o41: "",
        o42: "",
        o43: "",
        o44: "",
        ans4: "",
        q5: "",
        o51: "",
        o52: "",
        o53: "",
        o54: "",
        ans5: "",
    });

  const createQuiz = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quiz/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: post.title,
          q1
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CreateQuiz
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createQuiz}
    />
  );
};

export default CreatePrompt;