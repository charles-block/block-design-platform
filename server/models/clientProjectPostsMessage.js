import mongoose from 'mongoose';

const clientProjectPostsSchema = mongoose.Schema({
    title: String,
    designerName: String,
    clientName: String,
    content: String,
    date: String,
    selectedFile: String
});

const ClientProjectPostsMessage = mongoose.model('ClientProjectPostsMessage', clientProjectPostsSchema);

export default ClientProjectPostsMessage;