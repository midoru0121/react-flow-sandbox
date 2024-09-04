import { useEdgesState, useNodesState, type Node, type Edge, ReactFlow } from "@xyflow/react";
import { type ChangeEvent, useCallback, useState } from "react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import '@xyflow/react/dist/style.css';

const DEFAULT_NODE = {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 100, y: 0 }
}

const CRUD = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([{
        id: "1",
        type: "input",
        data: { label: "Input Node" },
        position: { x: 100, y: 0 }
    }]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    const [msgLabel, setMsgLabel] = useState<string>("")
    const [isPopOverOpen, setIsPopoverOpen] = useState<boolean>(false)

    const updateIsPopoverOpen = (isOpen: boolean) => () => {
        setIsPopoverOpen(isOpen)
    }

    const updateTextMessage = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setMsgLabel(event.currentTarget.value)
    }, [])

    const addNode = useCallback(() => {
        const lastNode = nodes[nodes.length -1] || DEFAULT_NODE
        const newNodeId = Number.parseInt(lastNode.id) + 1

        const newNode = {
            id: String(newNodeId),
            position: { x: lastNode.position.x, y: lastNode.position.y + 50 },
            data: { label: msgLabel },
            draggable: true
        }

        console.log(newNode)
        
        setNodes((nodes) => [...nodes, newNode])
        setIsPopoverOpen(false)

    }, [nodes, msgLabel, setNodes])

    return (
    <>
        <Popover open={isPopOverOpen}>
            <PopoverTrigger onClick={updateIsPopoverOpen(true)}>Nodeを新規追加する</PopoverTrigger>
            <PopoverContent>
                <Textarea className="mb-4" onChange={updateTextMessage} value={msgLabel} />
                <Button onClick={addNode}>Nodeを追加</Button>
            </PopoverContent>
        </Popover>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            defaultViewport={ { x: 0, y: 0, zoom: 1.5 }}
            attributionPosition="bottom-left"
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            fitViewOptions={{ padding: 0.5 }}
        />
    </>
    )    
}

export default CRUD;