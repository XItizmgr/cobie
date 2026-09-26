from tools.filesystem import read_file, write_file, list_directory
from tools.search import search_file
from tools.terminal import run_command
from tools.git import git_diff, git_status


class ToolRegister:
    def __init__(self):
        self.tools = {
            "read_file": read_file,
            "write_file": write_file,
            "list_directory": list_directory,
            "search_file": search_file,
            "run_command": run_command,
            "git_status": git_status,
            "git_diff": git_diff,
        }

    def execute(self, name, args):
        if name not in self.tools:
            return {"success": False, "error": f"Unknown tool: {name}"}

        tool = self.tools[name]

        try:
            result = tool(**args)

            return {"success": True, "result": result}

        except Exception as e:
            return {"success": False, "error": str(e)}


if __name__ == "__main__":
    registry = ToolRegister()
    print(registry.tools)
    print(registry.execute("read_file", {"path": "README.md"}))
    print(registry.execute("list_directory", {"path": "."}))
