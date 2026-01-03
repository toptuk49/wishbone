interface ParsedFont {
  family: string;
  weight: string;
  style: string;
}

export function parseFontName(filename: string): ParsedFont {
  const name = filename.replace(/\.(ttf|woff2?)$/, "");
  const parts = name.split("-");
  const family = parts[0];
  const variant = parts[1] || "Regular";

  return {
    family,
    weight: parseFontWeight(variant),
    style: parseFontStyle(variant),
  };
}

function parseFontWeight(variant: string): string {
  if (
    variant.includes("Bold") &&
    !variant.includes("Semi") &&
    !variant.includes("Extra")
  ) {
    return "bold";
  } else if (variant.includes("Light")) {
    return "300";
  } else if (variant.includes("Medium")) {
    return "500";
  } else if (variant.includes("SemiBold") || variant.includes("DemiBold")) {
    return "600";
  } else if (variant.includes("ExtraBold") || variant.includes("Heavy")) {
    return "800";
  } else if (variant.includes("Black")) {
    return "900";
  } else if (variant.includes("Thin")) {
    return "100";
  }
  return "normal";
}

function parseFontStyle(variant: string): string {
  return variant.includes("Italic") || variant.includes("Oblique")
    ? "italic"
    : "normal";
}
