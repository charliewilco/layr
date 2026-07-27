interface IColor {
  name: string;
  value: string;
}

interface ISwatchProps {
  color: IColor;
}

export function Swatch({ color }: ISwatchProps) {
  return (
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
}

function renderSwatch(color: IColor) {
  return <Swatch color={color} key={color.name} />;
}

export function ColorRamp({ colors }: { colors: IColor[] }) {
  return <dl className="SwatchContainer">{colors.map(renderSwatch)}</dl>;
}
