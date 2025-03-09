import React, { useEffect, useState } from "react";

const ValentinesInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [answer, setAnswer] = useState(null);

  // Generate floating hearts when envelope is opened
  useEffect(() => {
    if (isOpen) {
      const newHearts = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          animationDuration: Math.random() * 3 + 2,
        });
      }
      setHearts(newHearts);
    } else {
      setHearts([]);
    }
  }, [isOpen]);

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 p-4">
      <div className="w-full max-w-md">
        {/* Floating hearts animation */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-500 animate-float"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.animationDuration}s`,
            }}
          >
            ❤️
          </div>
        ))}

        {/* The envelope */}
        {!isOpen ? (
          <div
            className="bg-red-500 rounded-lg shadow-xl p-8 mx-auto cursor-pointer transform transition-transform hover:scale-105"
            onClick={handleEnvelopeClick}
          >
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                You've received a Valentine!
              </h2>
              <p className="mb-6 italic">Click to open</p>
              <div className="text-5xl mb-4">💌</div>
              <p className="text-sm">From Your Secret Admirer</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8 mx-auto border-2 border-red-300">
            <button
              onClick={handleEnvelopeClick}
              className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm mb-4"
            >
              Close ×
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-red-500 mb-6">
                Happy Valentine's Day
              </h1>

              <p className="mb-6 text-gray-700 italic">
                "In all the world, there is no heart for me like yours. In all
                the world, there is no love for you like mine."
              </p>

              <div className="mb-8">
                <p className="text-lg mb-2">Will you be my Valentine?</p>

                {answer === null ? (
                  <div className="flex justify-center space-x-4 mt-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                      onClick={() => setAnswer("yes")}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full"
                      onClick={() => setAnswer("no")}
                    >
                      No
                    </button>
                  </div>
                ) : answer === "yes" ? (
                  <div className="text-center animate-bounce">
                    <p className="text-xl text-red-500 font-bold">
                      Wonderful! ❤️
                    </p>
                    <p className="mt-2">
                      I can't wait to spend Valentine's Day with you!
                    </p>
                    <p className="mt-4 text-sm">
                      Meet me at The Rose Garden Café, 7:00 PM, February 14th
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-lg text-gray-500">
                      I understand. Maybe next time!
                    </p>
                    <button
                      className="mt-2 text-red-500 underline"
                      onClick={() => setAnswer(null)}
                    >
                      Wait, I changed my mind!
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-pink-200 pt-4">
                <p className="text-gray-700">With all my love,</p>
                <p className="text-xl font-script text-red-500 mt-2">
                  Your Secret Admirer
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentinesInvitation;
