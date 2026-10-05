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
        if ("renderer" in track["displays"][0] and "color1" in track["displays"][0]["renderer"]) and (track["displays"][0]["renderer"]["color1"] == "jexl:variantColor(feature)" or track["displays"][0]["renderer"]["color1"] == "jexl:htVariantColor(feature)" ):
            del track["displays"][0]["renderer"]["color1"] 
        if "renderer" in track["displays"][0] and "labels" in track["displays"][0]["renderer"] and "name" in track["displays"][0]["renderer"]["labels"] and track["displays"][0]["renderer"]["labels"]["name"] == "jexl:variantLabel(feature)":
            del track["displays"][0]["renderer"]["labels"]["name"]
        if "renderer" in track["displays"][0] and "labels" in track["displays"][0]["renderer"] and "description" in track["displays"][0]["renderer"]["labels"] and track["displays"][0]["renderer"]["labels"]["description"] == "jexl:variantDescription(feature)":
            del track["displays"][0]["renderer"]["labels"]["description"]
        if "renderer" in track["displays"][0] and "labels" in track["displays"][0]["renderer"] and len(track["displays"][0]["renderer"]["labels"]) == 0:
            del track["displays"][0]["renderer"]["labels"]
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
