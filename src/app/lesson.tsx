"use client";

import React, { useState } from "react";

type LessonProps = {
  title: string;
  points: string[];
};

type LikeState = "unset" | "like" | "dislike";

export default function Lesson({ title, points }: LessonProps) {
  const [likeState, setLikeState] = useState<LikeState>("unset");

  const handleLikeClick = () => setLikeState("like");

  return (
    <div>
      <p>{title}</p>

      <ul>
        {points.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={handleLikeClick} type="button">
        {likeState === "unset" ? "like" : "dislike"}
      </button>
    </div>
  );
}
