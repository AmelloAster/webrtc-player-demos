import loadable from '@loadable/component';
import { type RouteObject } from 'react-router-dom';

import Pages from './Pages';

const Home = loadable(() => import('./home/Home'));
const WebRTCLivePlayer = loadable(() => import('./webrtc-live-player/WebRTCLivePlayer'));
const HandShake = loadable(() => import('./hand-shake/HandShake'));
const MeetingRoom = loadable(() => import('./meeting-room/MeetingRoom'));

const PrepRoom = loadable(() => import('./prep-room/PrepRoom'));

export const pagesRoutes: RouteObject[] = [
  {
    path: 'page',
    element: <Pages />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'webRTC-live-player',
        element: <WebRTCLivePlayer />
      },
      {
        path: 'hand-shake',
        element: <HandShake />
      },
      {
        path: 'meeting-room/:id',
        element: <MeetingRoom />
      },
      {
        path: 'prep-room',
        element: <PrepRoom />
      }
    ]
  }
];
