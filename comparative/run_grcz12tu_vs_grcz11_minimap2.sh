#!/usr/bin/env bash
set -euo pipefail
mkdir -p data/fasta comparative
GRCZ12_URL='https://s3.amazonaws.com/agrjbrowse/fasta/GCF_049306965.1_GRCz12tu_genomic.fna.gz'
GRCZ11_URL='https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000002035.6_GRCz11_genomic.fna.gz'
GRCZ12_FAI_URL='https://s3.amazonaws.com/agrjbrowse/fasta/GCF_049306965.1_GRCz12tu_genomic.fna.gz.fai'
GRCZ11_FAI_URL='https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000002035.6_GRCz11_genomic.fna.gz.fai'
GRCZ12='data/fasta/GCF_049306965.1_GRCz12tu_genomic.fna.gz'
GRCZ11='data/fasta/GCF_000002035.6_GRCz11_genomic.fna.gz'
OUT='comparative/GRCz12tu_vs_GRCz11.minimap2.asm5.paf'
TMP="${OUT}.tmp"
THREADS=10

download_if_missing() {
  local url=$1 out=$2
  if [ ! -s "$out" ]; then
    echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] Downloading $url -> $out"
    curl -L --fail --retry 5 --retry-delay 10 -C - -o "$out" "$url"
  else
    echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] Reusing existing $out"
  fi
}

download_if_missing "$GRCZ12_URL" "$GRCZ12"
download_if_missing "$GRCZ11_URL" "$GRCZ11"
download_if_missing "$GRCZ12_FAI_URL" "$GRCZ12.fai"
download_if_missing "$GRCZ11_FAI_URL" "$GRCZ11.fai"

echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] Checking gzip integrity"
gzip -t "$GRCZ12"
gzip -t "$GRCZ11"

echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] Running minimap2 -t $THREADS -cx asm5 $GRCZ11 $GRCZ12 > $OUT"
rm -f "$TMP" "$OUT" "${OUT}.gz"
.loom/env/bin/minimap2 -t "$THREADS" -cx asm5 "$GRCZ11" "$GRCZ12" > "$TMP"
mv "$TMP" "$OUT"

echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] Compressing PAF copy with bgzip"
.loom/env/bin/bgzip -@ "$THREADS" -c "$OUT" > "${OUT}.gz"

echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] Finished"
