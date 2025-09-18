import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTreeProps {
  performanceLevel: number;
  riskLevel: "low" | "medium" | "high";
}

export function AnimatedTree({ performanceLevel, riskLevel }: AnimatedTreeProps) {
  const [leafCount, setLeafCount] = useState(0);
  const [treeColor, setTreeColor] = useState("#8B5CF6");

  useEffect(() => {
    // Calculate leaf count based on performance (0-100)
    const maxLeaves = 20;
    const calculatedLeaves = Math.floor((performanceLevel / 100) * maxLeaves);
    setLeafCount(Math.max(2, calculatedLeaves)); // Minimum 2 leaves

    // Set tree color based on risk level
    switch (riskLevel) {
      case "low":
        setTreeColor("hsl(var(--risk-safe))");
        break;
      case "medium":
        setTreeColor("hsl(var(--risk-warning))");
        break;
      case "high":
        setTreeColor("hsl(var(--risk-critical))");
        break;
    }
  }, [performanceLevel, riskLevel]);

  // Generate leaf positions in a more natural tree shape
  const generateLeafPositions = (count: number) => {
    const positions = [];
    const centerX = 150;
    const centerY = 100;
    
    for (let i = 0; i < count; i++) {
      // Create a more natural distribution - wider at top, narrower at bottom
      const layer = Math.floor(i / 5); // 5 leaves per layer
      const layerOffset = i % 5;
      const layerRadius = 80 - (layer * 15); // Decrease radius as we go down
      const angle = (layerOffset / 5) * 2 * Math.PI + (layer * 0.5); // Slightly offset each layer
      
      const x = centerX + Math.cos(angle) * layerRadius + (Math.random() - 0.5) * 20;
      const y = centerY + Math.sin(angle) * (layerRadius * 0.6) + layer * 20 + (Math.random() - 0.5) * 15;
      
      positions.push({ x, y, delay: i * 0.1 });
    }
    return positions;
  };

  const leafPositions = generateLeafPositions(leafCount);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="300" height="250" viewBox="0 0 300 250" className="overflow-visible">
        {/* Tree Trunk */}
        <motion.rect
          x="140"
          y="180"
          width="20"
          height="60"
          fill="#8B4513"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "bottom" }}
        />

        {/* Tree Branches */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main branches */}
          <path
            d="M150 180 Q130 160 120 140"
            stroke="#8B4513"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M150 180 Q170 160 180 140"
            stroke="#8B4513"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M150 170 Q110 150 100 130"
            stroke="#8B4513"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M150 170 Q190 150 200 130"
            stroke="#8B4513"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Secondary branches */}
          <path
            d="M150 160 Q130 140 115 120"
            stroke="#8B4513"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M150 160 Q170 140 185 120"
            stroke="#8B4513"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Animated Leaves */}
        {leafPositions.map((pos, index) => (
          <motion.circle
            key={index}
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill={treeColor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1], 
              opacity: 1,
              rotate: [0, 10, -5, 0]
            }}
            transition={{ 
              duration: 0.6, 
              delay: pos.delay,
              ease: "easeOut",
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.3 }}
          />
        ))}

        {/* Tree Crown Shadow/Base */}
        <motion.ellipse
          cx="150"
          cy="200"
          rx="40"
          ry="8"
          fill="rgba(0,0,0,0.1)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </svg>

      {/* Performance Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="text-center">
          <div className="text-sm font-medium text-muted-foreground">Performance Health</div>
          <div className={`text-lg font-bold ${
            riskLevel === "low" ? "text-risk-safe" :
            riskLevel === "medium" ? "text-risk-warning" :
            "text-risk-critical"
          }`}>
            {leafCount}/{20} Leaves
          </div>
        </div>
      </motion.div>
    </div>
  );
}