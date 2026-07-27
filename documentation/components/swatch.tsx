interface IColor {
  name: string;
  value: string;
}

interface ISwatchProps {
  color: IColor;
}

export const Swatch = ({ color }: ISwatchProps) => (
  <div className="Swatch u-mb3 u-mx1">
    <div
      className="Swatch__value"
      style={{ height: 100, background: color.value }}
    />
    <div className="Swatch__details u-p1 small">
      <dt className="u-bl small">
        <code>--{color.name}</code>
      </dt>
      <dd className="u-bl small">
        <code className="small">{color.value}</code>
      </dd>
    </div>
  </div>
);

export const ColorRamp = ({ colors }: { colors: IColor[] }) => (
  <dl className="SwatchContainer">
    {colors.map((color) => (
      <Swatch color={color} key={color.name} />
    ))}
  </dl>
);
