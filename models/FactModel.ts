import mongoose, { Document, Schema } from 'mongoose';

export interface FactModel extends Document {
  _id: string;
  ffd: string;
}

const FactSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  ffd: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Fact || mongoose.model<FactModel>('facts', FactSchema);