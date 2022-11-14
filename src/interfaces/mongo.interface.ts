import mongoose from 'mongoose';

export interface UpdateData {
  data:
    | mongoose.UpdateWithAggregationPipeline
    | mongoose.UpdateQuery<{ [x: string]: unknown }>
    | undefined;
}
