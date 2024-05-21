import { Field, Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

export type InformationPageHeroProps = ComponentProps & {
  fields: {
    Name: Field<string>;
    Image: ImageField;
    FacebookProfileLink?: Field<string>;
    TwitterProfileLink?: Field<string>;
    InstagramProfileLink?: Field<string>;
    LinkedinProfileLink?: Field<string>;
  };
  type: string;
  qualificative: string;
  informations?: JSX.Element;
};

const InformationPageHero = (props: InformationPageHeroProps): JSX.Element => {
  const informations = props.informations ? (
    <div className="informations">{props.informations}</div>
  ) : undefined;

  const lowerCaseQualificative = props.qualificative.toLowerCase();
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section
      className={`information-page-hero ${props.type}-information-page-hero ${lowerCaseQualificative} ${sxaStyles}`}
    >
      <div className="content">
        <div className="image-container">
          <Image field={props.fields.Image} alt="Image" loading="lazy" />
        </div>
        <div className="gradient-container"></div>
        <div className="content-container">
          <div className={`container-content-text`}>
            <div>
              <p className="title">Consultant Name:</p>
              <h1 className="name">
                <Text field={props.fields.Name} />
              </h1>
            </div>
            {informations}
            <div className="external-website-icons">
              <SocialIcon Icon={faLinkedinIn} Link={props.fields.LinkedinProfileLink} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationPageHero;
