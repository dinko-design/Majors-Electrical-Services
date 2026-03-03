import { useParams, Navigate } from 'react-router';
import { SegmentLandingPage } from './SegmentLandingPage';
import { segmentData } from '../data/segmentData';

export function SegmentPage() {
  const { segmentId } = useParams();
  const data = segmentData[segmentId || ''];

  if (!data) {
    return <Navigate to="/who-we-serve" replace />;
  }

  return <SegmentLandingPage data={data} />;
}
