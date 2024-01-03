'use client'

import React, { useEffect, useRef, useState } from 'react';
import Monopoly from './Monopoly';

export default function Room() {
  return (
    <div className="app">
      <div className="v-room">

        <div className="v-content">

          <div className="v-content-left h-[1800px] ">
            <div className="border-4 border-red-400 bg-yellow-900 h-full">
              Content
            </div>
          </div>

          <Monopoly className="v-content-center" />

          <div className="v-content-right w-full h-[1800px]">
            <div className="border-4 bg-violet-900 border-violet-400 w-full">
              Content
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
