import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [
  {
    title: "Wings Of Your Freedom",
    artist: "BoDleasons",
    imageUrl: "/cover-images/1.jpg",
    audioUrl: "/songs/1.mp3",
    duration: 142, // 2:22
  },
  {
    title: "Harmony With The World",
    artist: "BoDleasons",
    imageUrl: "/cover-images/1.jpg",
    audioUrl: "/songs/2.mp3",
    duration: 79, // 1:19
  },
  {
    title: "Excess Intensity",
    artist: "BoDleasons",
    imageUrl: "/cover-images/1.jpg",
    audioUrl: "/songs/3.mp3",
    duration: 117, // 1:57
  },
  {
    title: "Dance Excitement",
    artist: "BoDleasons",
    imageUrl: "/cover-images/1.jpg",
    audioUrl: "/songs/4.mp3",
    duration: 136, // 2:16
  },
  {
    title: "Cinematic Documentary Atmosphere",
    artist: "BoDleasons",
    imageUrl: "/cover-images/1.jpg",
    audioUrl: "/songs/5.mp3",
    duration: 143, // 2:23
  },
  {
    title: "Travel Vibe",
    artist: "BoDleasons",
    imageUrl: "/cover-images/1.jpg",
    audioUrl: "/songs/6.mp3",
    duration: 159, // 2:39
  },
  {
    title: "Bubble Upbeat Motivational",
    artist: "Lidérc",
    imageUrl: "/cover-images/2.jpg",
    audioUrl: "/songs/7.mp3",
    duration: 135, // 2:15
  },
  {
    title: "Eulogy Ambient Piano",
    artist: "Lidérc",
    imageUrl: "/cover-images/2.jpg",
    audioUrl: "/songs/8.mp3",
    duration: 75, // 1:15
  },
  {
    title: "Summer Walker Future",
    artist: "Lidérc",
    imageUrl: "/cover-images/2.jpg",
    audioUrl: "/songs/9.mp3",
    duration: 96, // 1:36
  },
  {
    title: "Lofi X Chillhop Upbeat",
    artist: "Lidérc",
    imageUrl: "/cover-images2.jpg",
    audioUrl: "/songs/10.mp3",
    duration: 78, // 1:18
  },
  {
    title: "Lofi Chill Background Music",
    artist: "Lidérc",
    imageUrl: "/cover-images/2.jpg",
    audioUrl: "/songs/11.mp3",
    duration: 102, // 1:42
  },
  {
    title: "Upbeat Lo Fi Chill Instrumental",
    artist: "Lidérc",
    imageUrl: "/cover-images/2.jpg",
    audioUrl: "/songs/12.mp3",
    duration: 129, // 2:09
  },
  {
    title: "Inspiring Ambient",
    artist: "Penquin Music",
    imageUrl: "/cover-images/3.jpeg",
    audioUrl: "/songs/13.mp3",
    duration: 108, // 1:48
  },
  {
    title: "Penguinmusic Positive Energetic Future",
    artist: "Penquin Music",
    imageUrl: "/cover-images/3.jpeg",
    audioUrl: "/songs/14.mp3",
    duration: 94, // 1:34
  },
  {
    title: "Atmospheric",
    artist: "Penquin Music",
    imageUrl: "/cover-images/3.jpeg",
    audioUrl: "/songs/15.mp3",
    duration: 233, // 3:53
  },
  {
    title: "Proximity Liquid",
    artist: "Penquin Music",
    imageUrl: "/cover-images/3.jpeg",
    audioUrl: "/songs/16.mp3",
    duration: 75, // 1:15
  },
  {
    title: "Enjoy The Summer",
    artist: "Penquin Music",
    imageUrl: "/cover-images/3.jpeg",
    audioUrl: "/songs/17.mp3",
    duration: 127, // 2:07
  },
  {
    title: "Space Chillout",
    artist: "Penquin Music",
    imageUrl: "/cover-images/3.jpeg",
    audioUrl: "/songs/18.mp3",
    duration: 100, // 1:40
  },
  {
    title: "Deafening Bouncing Groove",
    artist: "Rockot",
    imageUrl: "/cover-images/4.jpg",
    audioUrl: "/songs/19.mp3",
    duration: 89, // 1:29
  },
  {
    title: "Action Of Your Dreams",
    artist: "Rockot",
    imageUrl: "/cover-images/4.jpg",
    audioUrl: "/songs/20.mp3",
    duration: 90, // 1:30
  },
  {
    title: "Nomadic Chaos Orchestral Beat",
    artist: "Rockot",
    imageUrl: "/cover-images/4.jpg",
    audioUrl: "/songs/21.mp3",
    duration: 89, // 1:29
  },
  {
    title: "Turn It Up",
    artist: "Rockot",
    imageUrl: "/cover-images/4.jpg",
    audioUrl: "/songs/22.mp3",
    duration: 167, // 2:47
  },
  {
    title: "Dark Drone Intrigue Suspense",
    artist: "Rockot",
    imageUrl: "/cover-images/4.jpg",
    audioUrl: "/songs/23.mp3",
    duration: 118, // 1:58
  },
  {
    title: "Drive Breakbeat",
    artist: "Rockot",
    imageUrl: "/cover-images/4.jpg",
    audioUrl: "/songs/24.mp3",
    duration: 109, // 1:49
  }
];

const seedSongs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // Clear existing songs
    await Song.deleteMany({});

    // Insert new songs
    await Song.insertMany(songs);
    console.log("Songs seeded successfully!");
  } catch (error) {
    console.error("Error seeding songs:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedSongs();
