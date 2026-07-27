import variables from 'layr.css/css.json';
import snippet from 'layr.css/src/settings/layr.colors.css?raw';
import { ColorRamp } from '../../../components/swatch';

const BLACKLIST = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'link',
  'linkHover',
  'uiListBorder',
  'tableLabelColor',
  'btnColor',
  'btnColorHover',
  'formColor',
  'formOffsetColor',
  'formBorderColor',
  'selectArrowColor',
  'rangeColor',
  'rdgColor',
  'rdgOffsetColor',
  'progressColor',
  'dropdownHeader',
  'dropdownBackground',
  'tabsBackground',
  'tabsMarkerColor',
  'tabsMarkerInactiveColor'
];

// console.log([].concat.apply([], validColors(variables).map(v => v.name)));

const validColors = allVariables =>
  Object.keys(allVariables)
    .map(v => allVariables[v].startsWith('#') && { name: v, value: allVariables[v] })
    .filter(Boolean)
    .filter(v => !BLACKLIST.includes(v.name));

const colors = validColors(variables);

const Colors = () => <ColorRamp colors={colors} />;

export { Colors, snippet };
