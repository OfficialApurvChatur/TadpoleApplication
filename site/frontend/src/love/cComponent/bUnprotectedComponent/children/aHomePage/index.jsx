import Loader from '@/love/cComponent/aGlobalComponent/component/cLoader';
import React, { Suspense, useState } from 'react'

// Component
const HeroSectionComponent = React.lazy(() => import('./component/aHeroSectionComponent'));
const CounterSectionComponent = React.lazy(() => import('./component/bCounterSectionComponent'));
const AboutAndServiceSectionComponent = React.lazy(() => import('./component/cAboutAndServiceSectionComponent'));
const BranchSectionComponent = React.lazy(() => import('./component/dBranchSectionComponent'));
const ProjectSectionComponent = React.lazy(() => import('./component/eProjectSectionComponent'));


const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <div className="bg-[#F0EDCC] dark:bg-[#02343F] text-[#02343F] dark:text-[#F0EDCC] lg:px-20">
      <Suspense fallback={<Loader text="Suspense Boom Loading..." />}>
        {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve && <HeroSectionComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />}

        {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve &&
          <React.Fragment>
            {Redux.state.ReceivedObject?.Retrieve?.CounterList && <CounterSectionComponent Redux={Redux} />}
            {
              Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve && 
              Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually && 
              Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively && 
              Redux.state.ReceivedObject?.Retrieve?.ServiceList && 
                <AboutAndServiceSectionComponent Redux={Redux} />
            }
            {Redux.state.ReceivedObject?.Retrieve?.BranchRetrieve && <BranchSectionComponent Redux={Redux} />}
            {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve && <ProjectSectionComponent Redux={Redux} />}
          </React.Fragment>
        }
      </Suspense>
    </div>
  )
}

export default HomePageComponent