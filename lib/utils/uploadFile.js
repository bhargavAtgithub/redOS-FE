import Compressor from 'compressorjs';
import { supabase } from '../../config/supabaseClient';

const uploadFile = async (file, user_id, isUpdate = false) => {
    const isImage = (file) => file['type'].includes('image');

    if (isImage) {
        let compressedImage = await compressImage(file);
        console.log(isUpdate);
        if (isUpdate) {
            console.log('updating');
            const { data, error } = await supabase.storage
                .from('avatars')
                .update(`public/${user_id}.png`, compressedImage, {
                    cacheControl: '3600',
                    upsert: false,
                });
            console.log(data);
            if (error) console.log(error);
        } else {
            console.log('uploading');
            const { error } = await supabase.storage
                .from('avatars')
                .upload(`public/${user_id}.png`, compressedImage, {
                    cacheControl: '3600',
                    upsert: false,
                });
            if (error) console.log(error);
        }

        const { publicURL, error } = supabase.storage
            .from('avatars')
            .getPublicUrl(`public/${user_id}.png`);

        console.log(error);

        return publicURL;
    }
};

const compressImage = async (image) => {
    return new Promise((resolve, reject) => {
        new Compressor(image, {
            quality: 0.6,
            success(compressedFile) {
                resolve(compressedFile);
            },
            error() {
                reject();
            },
        });
    });
};

export default uploadFile;
