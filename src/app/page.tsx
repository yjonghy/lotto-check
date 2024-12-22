'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [checkBoard, setCheckBoard] = useState<Array<Number>>([0])//체크 번호 판
  
  const addCheckBoard = () => {
    const copy = [...checkBoard]
    copy.push(copy.length)
    setCheckBoard(copy)
  }

  const deleteCheckBoard = () => {
    const copy = [...checkBoard]
    copy.pop()
    setCheckBoard(copy)
  }

  return (
    <div className="py-[12px] px-[24px] w-full h-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-center">
        <p>내 번호 확인하기 (판 클릭)</p>
        <div className="flex gap-[8px] items-center">
          <button className="">
            추가
          </button>
          <button>
            삭제
          </button>
        </div>
      </div>
      <main className="w-full grid grid-cols-2">

      </main>
    </div>
  );
}
