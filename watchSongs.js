import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

// Define the path to the songs directory
const songsDir = path.join(process.cwd(), 'public', 'songs');

// Function to generate songs.json
const generateSongsJson = () => {
    fs.readdir(songsDir, (err, files) => {
        if (err) {
            return console.error('Unable to scan directory: ' + err);
        }

        const songs = files
            .filter(file => /\.(mp3|wav|ogg)$/.test(file))
            .map(file => ({
                name: path.basename(file, path.extname(file)),
                file: `songs/${file}`
            }));

        fs.writeFileSync(path.join(songsDir, 'songs.json'), JSON.stringify(songs, null, 2));
        console.log('songs.json has been updated.');
    });
};

// Watch for changes in the songs directory
chokidar.watch(songsDir).on('all', (event) => {
    console.log(`Event: ${event}`);
    generateSongsJson();
});

// Initial generation of songs.json
generateSongsJson();