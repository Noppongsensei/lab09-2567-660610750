import React from "react";

interface FooterProps {
  year: string;
  fullName: string;
  studentId: string;
}

export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        Copyright © {year} {fullName} {studentId}
      </p>
    </div>
  );
}

