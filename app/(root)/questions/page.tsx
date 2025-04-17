import React from "react";
import Image from "next/image";

const QuestionsPage = () => {
  return (
    <div className="call-view">
      <div className="card-interviewer">
        <div className="avatar">
          <Image
            src="/ai-avatar.png"
            alt="profile-image"
            width={65}
            height={54}
            className="object-cover"
          />
        </div>
        <h3>AI Agent</h3>
      </div>
      <div className="card-border">
        <div className="card-content">
          <Image
            src="/user-avatar.png"
            alt="profile-image"
            width={539}
            height={539}
            className="rounded-full object-cover size-[120px]"
          />
          <h3>Manoj</h3>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
