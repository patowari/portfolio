import React from "react";

const techStack = [
  "python",
  "c",
  "cplusplus",
  "javascript",
  "mysql",
  "tensorflow",
  "opencv",
  "scikitlearn",
  "pandas",
  "numpy",
  "keras",
  "huggingface",
  "pytorch",
  "langchain",
  "opennn",
  "pybrain",
  "nltk",
  "spacy",
  "yolo",
  "react",
  "capacitor",
  "mongodb",
  "aws",
  "docker",
  "git",
  "github"
];

const TechBadges = () => {
  return (
    <div className="bg-black p-6 rounded-2xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <img
              src={`/icons/${tech}.svg`}
              alt={tech}
              className="w-5 h-5"
            />
            <span className="text-white text-sm capitalize">
              {tech.replace(/-/g, " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBadges;