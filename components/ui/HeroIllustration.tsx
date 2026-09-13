"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="w-full relative select-none flex items-center justify-center">
      <svg
        viewBox="0 0 760 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block overflow-visible drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="screenBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#232d38" />
            <stop offset="100%" stopColor="#182029" />
          </linearGradient>

          <linearGradient id="monitorBezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D9E2EC" />
          </linearGradient>

          <linearGradient id="panelBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c3846" />
            <stop offset="100%" stopColor="#1f2833" />
          </linearGradient>

          <linearGradient id="activeLayerBg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2e3f52" />
            <stop offset="100%" stopColor="#273545" />
          </linearGradient>

          <linearGradient id="limeCyanGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#afe714" />
            <stop offset="100%" stopColor="#53ede3" />
          </linearGradient>

          <linearGradient id="cyanLimeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#53ede3" />
            <stop offset="100%" stopColor="#afe714" />
          </linearGradient>

          <linearGradient id="standGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="limeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="panelShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0c1218" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* 1. BACKGROUND VECTOR AMBIENT GRAPHICS & BEZIER CURVES     */}
        {/* ======================================================== */}

        {/* Top Bezier Wave Line with Control Handles */}
        <g opacity="0.65">
          <path
            d="M 180 60 Q 230 30 280 60 T 380 60"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 175 60 C 220 20, 240 100, 285 60 C 330 20, 350 100, 395 60"
            stroke="#53ede3"
            strokeWidth="2"
            fill="none"
          />
          {/* Anchor Points and Tangent Arms */}
          <circle cx="175" cy="60" r="3.5" fill="#293541" stroke="#53ede3" strokeWidth="2" />
          <circle cx="285" cy="60" r="3.5" fill="#293541" stroke="#53ede3" strokeWidth="2" />
          <circle cx="395" cy="60" r="3.5" fill="#293541" stroke="#53ede3" strokeWidth="2" />
          <line x1="260" y1="35" x2="310" y2="85" stroke="#94A3B8" strokeWidth="1" />
          <rect x="257" y="32" width="6" height="6" fill="#afe714" />
          <rect x="307" y="82" width="6" height="6" fill="#afe714" />
        </g>

        {/* Top-Right Sparkles / Geometric Nodes */}
        <g opacity="0.75">
          <path d="M 480 50 L 483 58 L 491 61 L 483 64 L 480 72 L 477 64 L 469 61 L 477 58 Z" fill="#53ede3" />
          <path d="M 605 105 L 607 110 L 612 112 L 607 114 L 605 119 L 603 114 L 598 112 L 603 110 Z" fill="#afe714" />
        </g>

        {/* Left Side: Transformable Typography 'T' in Bounding Box */}
        <g opacity="0.6">
          <rect x="75" y="240" width="60" height="65" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 3" fill="none" rx="2" />
          <rect x="71" y="236" width="7" height="7" fill="#53ede3" stroke="#293541" strokeWidth="1" />
          <rect x="131" y="236" width="7" height="7" fill="#53ede3" stroke="#293541" strokeWidth="1" />
          <rect x="71" y="301" width="7" height="7" fill="#53ede3" stroke="#293541" strokeWidth="1" />
          <rect x="131" y="301" width="7" height="7" fill="#53ede3" stroke="#293541" strokeWidth="1" />
          <text x="92" y="286" fontFamily="var(--font-poppins), sans-serif" fontWeight="bold" fontSize="34" fill="#94A3B8">
            T
          </text>
        </g>

        {/* Left Side: Bezier S-Curve Geometry with Tangent Handles */}
        <g opacity="0.55">
          <path d="M 105 130 C 70 170, 130 200, 95 240" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
          <circle cx="105" cy="130" r="3.5" fill="#afe714" />
          <circle cx="95" cy="240" r="3.5" fill="#afe714" />
          <line x1="85" y1="120" x2="125" y2="140" stroke="#53ede3" strokeWidth="1" />
          <rect x="83" y="118" width="5" height="5" fill="#53ede3" />
          <rect x="123" y="138" width="5" height="5" fill="#53ede3" />
        </g>

        {/* Bottom-Left: Circle with 4 Anchor Nodes and Crosshairs */}
        <g opacity="0.55">
          <circle cx="130" cy="360" r="38" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 4" fill="none" />
          <line x1="130" y1="315" x2="130" y2="405" stroke="#94A3B8" strokeWidth="1" opacity="0.4" />
          <line x1="85" y1="360" x2="175" y2="360" stroke="#94A3B8" strokeWidth="1" opacity="0.4" />
          <circle cx="130" cy="360" r="4" fill="#afe714" />
          <circle cx="130" cy="322" r="3" fill="#53ede3" />
          <circle cx="130" cy="398" r="3" fill="#53ede3" />
          <circle cx="92" cy="360" r="3" fill="#53ede3" />
          <circle cx="168" cy="360" r="3" fill="#53ede3" />
        </g>

        {/* Bottom-Right: Vector Pen Tool with Anchor Points & Curve */}
        <g opacity="0.8">
          <path d="M 525 390 C 585 360, 615 445, 680 380" stroke="#94A3B8" strokeWidth="2" fill="none" />
          <circle cx="525" cy="390" r="4" fill="#53ede3" stroke="#293541" strokeWidth="1.5" />
          <circle cx="600" cy="405" r="4" fill="#afe714" stroke="#293541" strokeWidth="1.5" />
          
          {/* Vector Pen Tool Nib */}
          <g transform="translate(635, 395) rotate(-35)">
            <path d="M 0 0 L 12 -28 L 24 0 L 16 12 L 8 12 Z" fill="#FFFFFF" stroke="#293541" strokeWidth="2" />
            <path d="M 6 -14 L 18 -14" stroke="#293541" strokeWidth="1.5" />
            <circle cx="12" cy="-4" r="2.5" fill="#53ede3" />
            <line x1="12" y1="-28" x2="12" y2="-4" stroke="#293541" strokeWidth="1.5" />
          </g>
        </g>

        {/* Top-Right: Floating Color Eyedropper Pipette */}
        <g opacity="0.75" transform="translate(620, 140) rotate(-40)">
          <rect x="0" y="0" width="8" height="28" rx="4" fill="#53ede3" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M 0 24 L 4 34 L 8 24 Z" fill="#53ede3" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="4" cy="-4" r="5" fill="#FFFFFF" />
        </g>

        {/* ======================================================== */}
        {/* 2. THE MAIN ISOMETRIC/PERSPECTIVE MONITOR                */}
        {/* ======================================================== */}

        {/* Monitor Base & Neck */}
        <g>
          {/* Neck */}
          <path
            d="M 345 360 L 360 425 L 400 425 L 415 360 Z"
            fill="url(#standGrad)"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          <path d="M 360 425 L 362 435 L 398 435 L 400 425 Z" fill="#94A3B8" />

          {/* Stand Plate Base */}
          <path
            d="M 275 435 L 335 410 L 485 410 L 515 445 L 305 470 Z"
            fill="#F8FAFC"
            stroke="#94A3B8"
            strokeWidth="2"
          />
          <path
            d="M 305 470 L 515 445 L 515 455 L 305 480 Z"
            fill="#CBD5E1"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <path
            d="M 275 435 L 305 470 L 305 480 L 275 445 Z"
            fill="#94A3B8"
            stroke="#64748B"
            strokeWidth="1.5"
          />
        </g>

        {/* Monitor Frame Outer White Bezel */}
        <rect
          x="155"
          y="85"
          width="450"
          height="285"
          rx="14"
          fill="url(#monitorBezel)"
          stroke="#CBD5E1"
          strokeWidth="3"
        />

        {/* Monitor Screen Area */}
        <rect
          x="167"
          y="97"
          width="426"
          height="261"
          rx="8"
          fill="url(#screenBg)"
        />

        {/* Screen Top App Bar */}
        <rect x="167" y="97" width="426" height="30" fill="#1b242e" rx="8" />
        <rect x="167" y="117" width="426" height="10" fill="#1b242e" />

        {/* App Bar Controls */}
        <g>
          {/* Home Icon */}
          <path d="M 183 112 L 188 107 L 193 112 V 118 H 183 Z" fill="#53ede3" />
          {/* Title */}
          <text x="202" y="116" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="11" fill="#E2E8F0">
            Main Canvas
          </text>
          {/* Search Icon */}
          <circle cx="470" cy="112" r="4.5" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
          <line x1="473.5" y1="115.5" x2="477" y2="119" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Layout Switcher Grid */}
          <rect x="490" y="108" width="4" height="4" fill="#94A3B8" rx="0.5" />
          <rect x="496" y="108" width="4" height="4" fill="#94A3B8" rx="0.5" />
          <rect x="490" y="114" width="4" height="4" fill="#94A3B8" rx="0.5" />
          <rect x="496" y="114" width="4" height="4" fill="#94A3B8" rx="0.5" />
          {/* Maximize Icon */}
          <rect x="515" y="108" width="10" height="9" stroke="#94A3B8" strokeWidth="1.2" fill="none" rx="1" />
        </g>

        {/* Sub-toolbar property controls */}
        <g>
          <rect x="220" y="136" width="16" height="12" rx="3" fill="#afe714" />
          <rect x="242" y="136" width="16" height="12" rx="3" fill="#53ede3" />
          <text x="272" y="146" fontFamily="var(--font-inter), sans-serif" fontSize="9.5" fill="#94A3B8">
            Stroke: <tspan fill="#FFFFFF">1 pt</tspan>
          </text>
          <text x="375" y="146" fontFamily="var(--font-inter), sans-serif" fontSize="9.5" fill="#94A3B8">
            Opacity: <tspan fill="#FFFFFF">100%</tspan>
          </text>
          <text x="475" y="146" fontFamily="var(--font-inter), sans-serif" fontSize="9.5" fill="#94A3B8">
            Style: <tspan fill="#FFFFFF">Default</tspan>
          </text>
        </g>

        {/* Canvas Subtle Grid Lines */}
        <g opacity="0.12" stroke="#FFFFFF" strokeWidth="1">
          <line x1="180" y1="180" x2="570" y2="180" strokeDasharray="3 3" />
          <line x1="180" y1="230" x2="570" y2="230" strokeDasharray="3 3" />
          <line x1="180" y1="280" x2="570" y2="280" strokeDasharray="3 3" />
          <line x1="250" y1="160" x2="250" y2="340" strokeDasharray="3 3" />
          <line x1="330" y1="160" x2="330" y2="340" strokeDasharray="3 3" />
          <line x1="410" y1="160" x2="410" y2="340" strokeDasharray="3 3" />
          <line x1="490" y1="160" x2="490" y2="340" strokeDasharray="3 3" />
        </g>

        {/* ======================================================== */}
        {/* 3. CENTERPIECE NEXIV 'N' LOGO EMBLEM ON SCREEN          */}
        {/* ======================================================== */}
        <g transform="translate(250, 165)" filter="url(#limeGlow)">
          <path
            d="M 28 85 C 16 85 10 74 10 58 V 28 C 10 16 18 8 30 8 C 42 8 48 16 48 28 V 65 C 48 70 52 74 58 74 C 64 74 68 70 68 65 V 28 C 68 16 76 8 88 8 C 100 8 108 16 108 28 V 58 C 108 74 102 85 90 85 C 78 85 70 76 70 65 V 30 C 70 24 66 20 60 20 C 54 20 50 24 50 30 V 65 C 50 76 42 85 28 85 Z"
            fill="#afe714"
          />
        </g>

        {/* ======================================================== */}
        {/* 4. FLOATING TOOLBAR (LEFT)                               */}
        {/* ======================================================== */}
        <g filter="url(#panelShadow)">
          <rect
            x="130"
            y="145"
            width="72"
            height="175"
            rx="14"
            fill="url(#panelBg)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Tools Grid inside Pill */}
          {/* Tool 1: Selection Pointer Cursor */}
          <path d="M 148 165 L 148 180 L 152 176 L 157 183 L 159 181 L 154 174 L 160 174 Z" fill="#FFFFFF" />
          {/* Tool 2: Direct Select Cursor */}
          <path d="M 172 165 L 172 180 L 176 176 L 181 183 L 183 181 L 178 174 L 184 174 Z" fill="#53ede3" />
          
          {/* Tool 3: Pen Tool */}
          <path d="M 147 205 L 154 195 L 159 200 L 152 210 L 147 210 Z" fill="#afe714" />
          <circle cx="153" cy="202" r="1.5" fill="#293541" />
          {/* Tool 4: Brush */}
          <path d="M 173 196 C 173 196, 180 196, 182 201 C 182 201, 183 207, 178 207 C 174 207, 173 203, 173 196 Z" fill="#FFFFFF" />

          {/* Tool 5: Type Tool 'T' */}
          <text x="146" y="235" fontFamily="var(--font-poppins), sans-serif" fontWeight="bold" fontSize="16" fill="#FFFFFF">
            T
          </text>
          {/* Tool 6: Slice / Knife Tool */}
          <path d="M 173 234 L 183 222 L 185 224 L 175 236 Z" fill="#FFFFFF" />

          {/* Tool 7: Rectangle Shape Tool */}
          <rect x="146" y="250" width="14" height="12" rx="2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
          {/* Tool 8: Color Pipette */}
          <path d="M 174 260 L 181 251 L 184 254 L 177 263 L 174 264 Z" fill="#53ede3" />

          {/* Bottom Gripper Dots */}
          <circle cx="160" cy="298" r="1.5" fill="#64748B" />
          <circle cx="166" cy="298" r="1.5" fill="#64748B" />
          <circle cx="172" cy="298" r="1.5" fill="#64748B" />
        </g>

        {/* ======================================================== */}
        {/* 5. FLOATING LAYERS PANEL (CENTER RIGHT)                  */}
        {/* ======================================================== */}
        <g filter="url(#panelShadow)">
          <rect
            x="370"
            y="160"
            width="145"
            height="140"
            rx="10"
            fill="url(#panelBg)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Layers Title */}
          <text x="384" y="180" fontFamily="var(--font-poppins), sans-serif" fontWeight="600" fontSize="11" fill="#FFFFFF">
            Layers
          </text>

          {/* Vertical Status Gradient Line */}
          <rect x="415" y="190" width="3" height="98" rx="1.5" fill="url(#limeCyanGrad)" />

          {/* Layer 1 */}
          <g transform="translate(378, 192)">
            {/* Eye Icon */}
            <path d="M 4 8 C 6 4, 12 4, 14 8 C 12 12, 6 12, 4 8 Z" stroke="#94A3B8" strokeWidth="1.2" fill="none" />
            <circle cx="9" cy="8" r="2" fill="#94A3B8" />
            {/* Lock */}
            <rect x="22" y="5" width="8" height="7" rx="1" fill="#64748B" />
            <path d="M 24 5 V 3 C 24 1.5, 28 1.5, 28 3 V 5" stroke="#64748B" strokeWidth="1" fill="none" />
            {/* Thumbnail */}
            <rect x="48" y="0" width="20" height="16" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
            {/* Name */}
            <text x="76" y="12" fontFamily="var(--font-inter), sans-serif" fontSize="10" fill="#E2E8F0">
              Layer 1
            </text>
          </g>

          {/* Layer 2 (Active Highlighted) */}
          <g transform="translate(378, 226)">
            <rect x="-4" y="-3" width="137" height="22" rx="4" fill="url(#activeLayerBg)" stroke="#53ede3" strokeWidth="1" />
            {/* Eye Icon */}
            <path d="M 4 8 C 6 4, 12 4, 14 8 C 12 12, 6 12, 4 8 Z" stroke="#53ede3" strokeWidth="1.2" fill="none" />
            <circle cx="9" cy="8" r="2" fill="#53ede3" />
            {/* Thumbnail with Mini Nexiv Logo */}
            <rect x="48" y="0" width="20" height="16" rx="2" fill="#293541" stroke="#afe714" strokeWidth="1" />
            <path d="M 54 12 V 4 H 58 V 12 H 62 V 4" stroke="#afe714" strokeWidth="1.2" fill="none" />
            {/* Name */}
            <text x="76" y="12" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="10" fill="#FFFFFF">
              Layer 2
            </text>
          </g>

          {/* Layer 3 */}
          <g transform="translate(378, 260)">
            {/* Eye Icon */}
            <path d="M 4 8 C 6 4, 12 4, 14 8 C 12 12, 6 12, 4 8 Z" stroke="#94A3B8" strokeWidth="1.2" fill="none" />
            <circle cx="9" cy="8" r="2" fill="#94A3B8" />
            {/* Lock */}
            <rect x="22" y="5" width="8" height="7" rx="1" fill="#64748B" />
            <path d="M 24 5 V 3 C 24 1.5, 28 1.5, 28 3 V 5" stroke="#64748B" strokeWidth="1" fill="none" />
            {/* Thumbnail with graphic */}
            <rect x="48" y="0" width="20" height="16" rx="2" fill="url(#limeCyanGrad)" />
            {/* Name */}
            <text x="76" y="12" fontFamily="var(--font-inter), sans-serif" fontSize="10" fill="#E2E8F0">
              Layer 3
            </text>
          </g>
        </g>

        {/* ======================================================== */}
        {/* 6. FLOATING COLOR SWATCH CARD (TOP RIGHT)               */}
        {/* ======================================================== */}
        <g filter="url(#panelShadow)">
          <rect
            x="530"
            y="140"
            width="70"
            height="70"
            rx="12"
            fill="url(#panelBg)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          {/* Swatch inner gradient with frame */}
          <rect x="542" y="152" width="46" height="46" rx="6" fill="url(#limeCyanGrad)" />
          <path d="M 542 182 L 572 152" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="578" cy="188" r="4" fill="#FFFFFF" />
        </g>

        {/* ======================================================== */}
        {/* 7. FLOATING ADJUSTMENTS PALETTE (MIDDLE RIGHT)           */}
        {/* ======================================================== */}
        <g filter="url(#panelShadow)">
          <rect
            x="515"
            y="230"
            width="135"
            height="75"
            rx="10"
            fill="url(#panelBg)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          {/* Adjustments Title */}
          <text x="527" y="248" fontFamily="var(--font-poppins), sans-serif" fontWeight="600" fontSize="10.5" fill="#FFFFFF">
            Adjustments
          </text>
          {/* Top Swatch row */}
          <g transform="translate(527, 256)">
            <rect x="0" y="0" width="16" height="14" rx="2" fill="#afe714" />
            <rect x="20" y="0" width="16" height="14" rx="2" fill="#FFFFFF" stroke="#64748B" strokeWidth="1" />
            <line x1="20" y1="7" x2="36" y2="7" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="40" y="0" width="16" height="14" rx="2" fill="#22c55e" />
            <rect x="60" y="0" width="16" height="14" rx="2" fill="#15803d" />
          </g>
          {/* Bottom Swatch row */}
          <g transform="translate(527, 276)">
            <rect x="0" y="0" width="16" height="14" rx="2" fill="#84cc16" />
            <rect x="20" y="0" width="16" height="14" rx="2" fill="#10b981" />
            <rect x="40" y="0" width="16" height="14" rx="2" fill="#14b8a6" />
            <rect x="60" y="0" width="16" height="14" rx="2" fill="#06b6d4" />
            <rect x="80" y="0" width="16" height="14" rx="2" fill="#0284c7" />
          </g>
        </g>

        {/* ======================================================== */}
        {/* 8. FLOATING GRADIENT SLIDER PANEL (BOTTOM CENTER)        */}
        {/* ======================================================== */}
        <g filter="url(#panelShadow)">
          <rect
            x="365"
            y="315"
            width="155"
            height="95"
            rx="10"
            fill="url(#panelBg)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Header controls */}
          <text x="380" y="333" fontFamily="var(--font-inter), sans-serif" fontSize="9.5" fill="#94A3B8">
            Type:
          </text>
          <rect x="410" y="324" width="12" height="11" rx="2" fill="url(#limeCyanGrad)" />
          <circle cx="432" cy="329.5" r="5.5" fill="url(#limeCyanGrad)" />

          {/* Gradient Bar Track */}
          <g transform="translate(380, 345)">
            <rect x="0" y="5" width="125" height="10" rx="5" fill="url(#limeCyanGrad)" />
            {/* Left stop slider node */}
            <circle cx="8" cy="10" r="6.5" fill="#afe714" stroke="#FFFFFF" strokeWidth="2" />
            {/* Right stop slider node */}
            <circle cx="117" cy="10" r="6.5" fill="#53ede3" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          {/* Numeric Readouts */}
          <g transform="translate(380, 375)">
            <text x="18" y="9" fontFamily="var(--font-inter), sans-serif" fontSize="9" fill="#94A3B8">
              Opacity: <tspan fill="#FFFFFF">100%</tspan>
            </text>
            <text x="18" y="23" fontFamily="var(--font-inter), sans-serif" fontSize="9" fill="#94A3B8">
              Location: <tspan fill="#FFFFFF">0%</tspan>
            </text>
          </g>
        </g>

        {/* ======================================================== */}
        {/* 9. FLOATING SHAPE MODES / PATHFINDERS PANEL (BOTTOM LEFT) */}
        {/* ======================================================== */}
        <g filter="url(#panelShadow)">
          <rect
            x="210"
            y="320"
            width="120"
            height="85"
            rx="10"
            fill="url(#panelBg)"
            stroke="#afe714"
            strokeWidth="1.5"
          />

          <text x="220" y="336" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="9" fill="#94A3B8">
            Shape Modes:
          </text>
          {/* Shape Modes Icons */}
          <g transform="translate(222, 342)" fill="#FFFFFF">
            {/* Unite */}
            <rect x="0" y="0" width="7" height="7" rx="1" />
            <rect x="4" y="3" width="7" height="7" rx="1" opacity="0.8" />
            {/* Minus Front */}
            <rect x="18" y="0" width="7" height="7" rx="1" />
            <rect x="22" y="3" width="7" height="7" rx="1" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            {/* Intersect */}
            <rect x="36" y="0" width="7" height="7" rx="1" />
            <circle cx="43" cy="5" r="3" fill="#53ede3" />
            {/* Exclude */}
            <rect x="54" y="0" width="7" height="7" rx="1" stroke="#FFFFFF" strokeWidth="1" fill="none" />
            <rect x="58" y="3" width="7" height="7" rx="1" stroke="#FFFFFF" strokeWidth="1" fill="none" />
          </g>

          <text x="220" y="368" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="9" fill="#94A3B8">
            Pathfinders:
          </text>
          {/* Pathfinders Icons */}
          <g transform="translate(222, 374)" fill="#FFFFFF">
            <rect x="0" y="0" width="6" height="6" fill="#53ede3" rx="1" />
            <rect x="8" y="0" width="6" height="6" fill="#afe714" rx="1" />
            <rect x="18" y="0" width="6" height="6" fill="#FFFFFF" rx="1" />
            <rect x="26" y="0" width="6" height="6" fill="#94A3B8" rx="1" />
            <rect x="36" y="0" width="6" height="6" fill="#53ede3" rx="1" />
            <rect x="46" y="0" width="6" height="6" fill="#afe714" rx="1" />
          </g>
        </g>
      </svg>
    </div>
  );
}
