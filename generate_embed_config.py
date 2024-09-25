#!/opt/homebrew/bin/python

import json
import io

config = open("config.json", "r")

data = json.load(config)

#print (data["assemblies"])

z9  = []
z10 = []
z11 = []
for track in data["tracks"]:
    if track["assemblyNames"][0] == "GRCz10":
        z10.append(track)
    if track["assemblyNames"][0] == "GRCz11":
        z11.append(track)
    if track["assemblyNames"][0] == "Zv9":
        z9.append(track)

z9_json_str  = json.dumps(z9,  indent=3)
z10_json_str = json.dumps(z10, indent=3)
z11_json_str = json.dumps(z11, indent=3)

file10 = open("GRCz10_tracks.js", "w")
file10.write("export default " + z10_json_str + ";")
file10.close

file11 = open("GRCz11_tracks.js", "w")
file11.write("export default " + z11_json_str + ";")
file11.close

file9 = open("Zv9_tracks.js", "w")
file9.write("export default " + z9_json_str + ";")
file9.close
