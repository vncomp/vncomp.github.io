import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Understand the Vietnamese Alphabet',
    Svg: require('@site/static/img/vncomplogo.svg').default,
    description: (
      <>
        Get an in depth review of how the Vietnamese alphabet works
        and examples of how its used in real words.
      </>
    ),
  },
  {
    title: 'Learn Vietnamese Grammar',
    Svg: require('@site/static/img/vncomplogo.svg').default,
    description: (
      <>
        Ever wanted to learn how to Vietnamese to make Vietnamese 
        sentences work? Learn now in the Grammar section.
      </>
    ),
  },
  {
    title: 'Stay Tuned for Upcoming Features',
    Svg: require('@site/static/img/vncomplogo.svg').default,
    description: (
      <>
        We're working on a bunch of new ideas for the future. Stay tuned 
        for all the upcoming resources we have planned!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
