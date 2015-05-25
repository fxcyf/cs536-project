from argparse import ArgumentParser
from itertools import islice

parser = ArgumentParser(description="Parse results")

parser.add_argument('--result_file', '-f',
                    type=str,
                    help="Name of file to parse from",
                    required=True)

# Expt parameters
args = parser.parse_args()

def parse_results():
    row_format ="{:>15}" * 5
    print row_format.format("Page", "RTT(ms)", "PLT: non-TFO(s)",
                            "PLT: TFO(s)", "Improv.")
    with open(args.result_file) as f:
        while True:
            entry = list(islice(f, 4))
            if not entry:
                break
            entry[1] = str(int(entry[1]) * 2) #double delay to get RTT
            improvement = float(entry[2])/float(entry[3]) - 1
            improvement = int(round(improvement, 2) * 100)
            entry.append(str(improvement) + "%")
            entry = map(str.strip, entry)
            print row_format.format(*entry)

if __name__ == "__main__":
    parse_results()
