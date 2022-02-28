import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Appbar from "../components/Appbar";
import Layout from "../components/Layout";
import SearchForm from "../components/makeasale/SearchForm";
import MakeSale from "./make-sale";

export default function Home() {
  return (
    <Layout>
      <Appbar />
      <MakeSale />
    </Layout>
  );
}
