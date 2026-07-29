import kndlng, {
  Color,
  Families,
  Obsidian,
  Spacing,
  Typescale,
} from "../dist/index.js";

const token: string = Obsidian.blue;
const color: string = Color.blue.medium;
const family: string = Families.system;
const spacing: string = Spacing().three;
const typeSize: string = Typescale().f4;

void [kndlng, token, color, family, spacing, typeSize];
