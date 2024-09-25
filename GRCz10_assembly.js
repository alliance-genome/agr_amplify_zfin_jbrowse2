export default {
  name: "GRCz10",
  displayName: "Danio rerio (GRCz10)",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCz10_refseq",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        locationType: "UriLocation",
        uri: "https://s3.amazonaws.com/agrjbrowse/fasta/GCA_018400075.1_ASM1840007v1_genomic.fna.gz",
      },
      faiLocation: {
        locationType: "UriLocation",
        uri: "https://s3.amazonaws.com/agrjbrowse/fasta/GCA_018400075.1_ASM1840007v1_genomic.fna.gz.fai",
      },
      gziLocation: {
        locationType: "UriLocation",
        uri: "https://s3.amazonaws.com/agrjbrowse/fasta/GCA_018400075.1_ASM1840007v1_genomic.fna.gz.gzi",
      },
    },
    displays: [
      {
        type: "LinearReferenceSequenceDisplay",
        displayId: "GRCz10_refseq-LinearReferenceSequenceDisplay",
      },
      {
        type: "LinearGCContentDisplay",
        displayId: "GRCz10_refseq-LinearGCContentDisplay",
      },
    ],
  },
};
