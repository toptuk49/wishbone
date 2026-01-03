class FontNameParser {
  private fontName: string;

  constructor(fontName: string) {
    this.fontName = fontName;
  }

  public parseFontFamily() {
    const parts = this.fontName.split("-");
    return parts[0];
  }

  public parseFontWeight() {
    const variant = this.parseFontVariant();
    if (variant.includes("Bold")) {
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

  public parseFontStyle() {
    const variant = this.parseFontVariant();
    if (variant.includes("Italic") || variant.includes("Oblique")) {
      return "italic";
    }

    return "normal";
  }

  private parseFontVariant() {
    const parts = this.fontName.split("-");
    return parts[1] || "Regular";
  }
}

export { FontNameParser };
